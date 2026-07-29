import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Explicitly serve static files from public directory
  app.use(express.static(path.join(process.cwd(), 'public')));

  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', school: "New Era's Vivaan The School" });
  });

  // AI Assistant chat endpoint for parents & prospective students
  app.post('/api/chat', async (req, res) => {
    try {
      const { message, history } = req.body;
      if (!message) {
        return res.status(400).json({ error: 'Message is required' });
      }

      const apiKey = process.env.GEMINI_API_KEY;

      const systemInstruction = `
You are Vivaan AI, the virtual admissions counselor & assistant for New Era's Vivaan The School.
Here is the official school knowledge base:
- School Name: New Era's Vivaan The School (A New Era Group Institution)
- Classes Offered: Nursery to Grade V (Primary) and Grade VI to X (Middle & High School with integrated IIT Foundation & Olympiad coaching).
- Location: Srinivasa Nagar, Khammam, Telangana, India.
- Phone Numbers: 93813 61354, 93980 52389
- Key Highlights: IIT Foundation from Grade VI onwards, 1:15 Teacher-Student Ratio, 100% CCTV Monitored Safe Campus, Smart Digital Classrooms, Advanced Science & Computer Labs, GPS-tracked School Bus Transport, Co-curricular Sports, Arts, Robotics, and Value-based Education.
- Timings: 8:30 AM to 4:00 PM (Monday to Saturday).
- Admissions 2026–27: Currently Open for Nursery to Grade X.
- Process: Online/In-person enquiry -> Campus Tour -> Application Form -> Interactive Assessment -> Admission & Orientation.

Answer parent questions clearly, warmly, concisely, and professionally. Always encourage them to apply or schedule a campus visit!
`;

      if (!apiKey) {
        const lower = message.toLowerCase();
        let fallbackReply = "Welcome to New Era's Vivaan The School! Admissions for 2026–27 are now open from Nursery to Grade X (including IIT Foundation for Grades VI–X). How may I assist you today?";
        
        if (lower.includes('contact') || lower.includes('phone') || lower.includes('number') || lower.includes('call')) {
          fallbackReply = "You can reach New Era's Vivaan The School directly at 📱 +91 93813 61354 or +91 93980 52389. Our campus is located at Srinivasa Nagar, Khammam, Telangana.";
        } else if (lower.includes('iit') || lower.includes('foundation') || lower.includes('grade 6') || lower.includes('grade vi') || lower.includes('class')) {
          fallbackReply = "Our flagship IIT Foundation Program runs from Grade VI to Grade X. It combines standard CBSE curriculum with advanced concepts in Physics, Chemistry, Math, and Logical Reasoning to prepare students for JEE, NEET, and Olympiads.";
        } else if (lower.includes('location') || lower.includes('address') || lower.includes('where') || lower.includes('khammam')) {
          fallbackReply = "New Era's Vivaan The School is conveniently located at Srinivasa Nagar, Khammam, Telangana. We provide GPS-enabled safe transport across all major routes in Khammam.";
        } else if (lower.includes('fee') || lower.includes('admission') || lower.includes('apply') || lower.includes('process')) {
          fallbackReply = "Admissions for 2026–27 are now open! You can fill out our instant application form or book a campus visit right here on our website. Would you like me to open the Admission Application form for you?";
        }

        return res.json({ reply: fallbackReply });
      }

      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
          ...(history || []).map((h: any) => ({
            role: h.role === 'user' ? 'user' : 'model',
            parts: [{ text: h.text }],
          })),
          { role: 'user', parts: [{ text: message }] },
        ],
        config: {
          systemInstruction,
        },
      });

      const reply = response.text || "Thank you for reaching out! Please call our admissions office at 93813 61354 or book a campus visit.";
      res.json({ reply });
    } catch (error: any) {
      console.error('Chat API Error:', error);
      res.status(500).json({
        reply: "New Era's Vivaan The School Admissions Team is available to help! Please call us at 93813 61354 or 93980 52389, or fill out the campus visit form.",
      });
    }
  });

  // Vite middleware for development vs static serve for production
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Vivaan School server running on http://localhost:${PORT}`);
  });
}

startServer();

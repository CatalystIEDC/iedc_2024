import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    const filePath = path.join(process.cwd(), 'emails.txt');

    try {
      // Append email to file, adding a new line
      fs.appendFileSync(filePath, email + '\n');
      res.status(200).json({ message: 'Email saved successfully' });
    } catch (error) {
      console.error('Error saving email:', error);
      res.status(500).json({ error: 'Failed to save email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
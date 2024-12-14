'use server';

import fs from 'fs';
import path from 'path';

export const fetchImages = async (event: { name: string; date: string; oneline_description: string; about: string; year: string; img: string; } | undefined) => {
  if (!event?.year || !event?.name) {
    console.error('Invalid event object provided.');
    return [];
  }

  
  const publicDir = path.join(process.cwd(), 'public', 'events', event.year);

  const eventImages: string[] = [];

  try {
    const files = fs.readdirSync(publicDir);
    const eventImgSrc = event.img.slice(0, -4).slice(1);
    files.forEach(file => {
      // console.log('file', file);
        //console.log('event.name', eventImgSrc);
      if (file.includes(eventImgSrc)) {
        eventImages.push(`/events/${event.year}/${file}`); 
      }
    });
  } catch (error) {
    console.error(`Error reading directory: ${publicDir}`, error);
    return [];
  }


  return eventImages;
};

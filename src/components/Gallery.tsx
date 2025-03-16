
import { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface GalleryItem {
  id: number;
  year: string;
  title: string;
  description: string;
  image: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    year: '1973',
    title: 'The Beginning',
    description: 'Where the journey began, with a promising future ahead.',
    image: 'https://images.unsplash.com/photo-1555946790-59a412213d4a?w=800&h=600&fit=crop',
  },
  {
    id: 2,
    year: '1990s',
    title: 'Career Heights',
    description: 'Achieving remarkable milestones in both professional and personal life.',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=800&h=600&fit=crop',
  },
  {
    id: 3,
    year: '2000s',
    title: 'Family Life',
    description: 'Building a beautiful family and creating lasting memories.',
    image: 'https://images.unsplash.com/photo-1551966775-a4ddc8df052b?w=800&h=600&fit=crop',
  },
  {
    id: 4,
    year: '2010s',
    title: 'Travel Adventures',
    description: 'Exploring the world and embracing new cultures and experiences.',
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&h=600&fit=crop',
  },
  {
    id: 5,
    year: 'Today',
    title: 'Golden Celebrations',
    description: 'Looking back with pride and forward with excitement.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop',
  },
];

const Gallery = () => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-background to-purple-light/10">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gold-text mb-4">A Journey Through Time</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Celebrating five decades of memories, milestones, and moments that have shaped an extraordinary life.
          </p>
          <div className="flex justify-center mt-6">
            <div className="h-px w-24 bg-gold"></div>
          </div>
        </div>

        <div className={`transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {galleryItems.map((item) => (
                <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="border-gold/30 overflow-hidden hover:shadow-lg hover:shadow-gold/10 transition-all duration-500">
                      <CardContent className="p-0">
                        <div className="relative">
                          <AspectRatio ratio={4/3}>
                            <img
                              src={item.image}
                              alt={item.title}
                              className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
                              loading="lazy"
                            />
                          </AspectRatio>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent p-6 flex flex-col justify-end text-white">
                            <span className="text-gold text-sm font-medium mb-1">{item.year}</span>
                            <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                            <p className="text-white/80 text-sm">{item.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 md:-left-12 bg-gold/20 hover:bg-gold/40 text-white border-none" />
            <CarouselNext className="right-0 md:-right-12 bg-gold/20 hover:bg-gold/40 text-white border-none" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

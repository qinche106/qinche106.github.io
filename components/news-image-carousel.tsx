'use client';

import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { type CarouselApi, Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { internalPath } from '@/lib/paths';
import type { NewsItem } from '@/lib/site-data';

export function NewsImageCarousel({ items }: { items: NewsItem[] }) {
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);
  const [paused, setPaused] = useState(false);

  const updateSelected = useCallback((carouselApi: CarouselApi) => {
    if (carouselApi) setSelected(carouselApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!api) return;
    api.on('select', updateSelected);
    api.on('reInit', updateSelected);
    return () => {
      api.off('select', updateSelected);
      api.off('reInit', updateSelected);
    };
  }, [api, updateSelected]);

  useEffect(() => {
    if (!api || paused) return;
    const interval = window.setInterval(() => api.scrollNext(), 5000);
    return () => window.clearInterval(interval);
  }, [api, paused]);

  return (
    <div
      className="news-carousel-wrap"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
    >
      <Carousel setApi={setApi} opts={{ loop: true }} aria-label="News images">
        <CarouselContent className="news-carousel-content">
          {items.map((item) => (
            <CarouselItem className="news-carousel-item" key={item.title}>
              <figure>
                <img src={internalPath(item.image!)} alt={item.imageAlt ?? ''} />
                <figcaption><time>{item.date}</time><span>{item.title}</span></figcaption>
              </figure>
            </CarouselItem>
          ))}
        </CarouselContent>
        <button className="carousel-control carousel-previous" type="button" onClick={() => api?.scrollPrev()} aria-label="Previous image">
          <ChevronLeft size={18} aria-hidden="true" />
        </button>
        <button className="carousel-control carousel-next" type="button" onClick={() => api?.scrollNext()} aria-label="Next image">
          <ChevronRight size={18} aria-hidden="true" />
        </button>
      </Carousel>
      <div className="carousel-dots" aria-label="Choose news image">
        {items.map((item, index) => (
          <button
            type="button"
            key={item.title}
            aria-label={`Show image ${index + 1}`}
            aria-current={selected === index ? 'true' : undefined}
            onClick={() => api?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}

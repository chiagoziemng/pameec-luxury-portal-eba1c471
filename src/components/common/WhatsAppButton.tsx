import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  const whatsappNumber = '2348055120504';
  const message = encodeURIComponent('Hello! I would like to make a reservation at Pameec Luxury Suite.');
  
  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}

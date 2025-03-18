
// const startConversation = () => {
//     if (!imageUrl) return;

//     const message = `Hello! I'm interested in this image: ${image}`;
//     const encodedMessage = encodeURIComponent(message);
//     const whatsappUrl = `https://wa.me/${socialLinks.whatsapp}?text=${encodedMessage}`;

//     // Open WhatsApp in a new tab
//     window.open(whatsappUrl, "_blank");
//   };

export function SocialLink({ href, icon: Icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="animate-pulse"
    >
      <Icon size={34} color="25D366" />
    </a>
  );
}


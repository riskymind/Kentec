export function SocialLink({ href, icon: Icon, size, color }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="animate-pulse"
    >
      <Icon size={size} color={color} />
    </a>
  );
}


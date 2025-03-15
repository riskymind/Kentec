export function SocialLink({ href, icon: Icon }) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="animate-pulse">
        <Icon size={34} color="25D366"/>
      </a>
    );
  }
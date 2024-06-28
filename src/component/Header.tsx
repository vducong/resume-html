import { ContactProps } from "../types";

export function Header({
  fullName,
  phone,
  email,
  linkedIn,
  github,
}: ContactProps) {
  return (
    <section className="headerMain">
      <div className="headerTitle">{fullName}</div>
      <div className="headerContact">
        <span>{phone}</span>
        {" | "}
        <a href={`mailto:${email}`}>{email}</a>
        {linkedIn && (
          <>
            {" | "}
            <a href={linkedIn.href}>{linkedIn.text}</a>
          </>
        )}
        {github && (
          <>
            {" | "}
            <a href={github.href}>{github.text}</a>
          </>
        )}
      </div>
    </section>
  );
}

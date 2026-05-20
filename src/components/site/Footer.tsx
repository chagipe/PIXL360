import Link from "next/link";
import { logoImage } from "@/config/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand-block">
          <Link className="footer-brand" href="/">
            <img alt="PIXL 360" className="footer-logo" src={logoImage} />
          </Link>
        </div>
        <div className="footer-meta">
          <p>© 2026 PIXL 360. TODOS LOS DERECHOS RESERVADOS.</p>
          <div className="footer-links">
            <Link href="/privacidad">Política de Privacidad</Link>
            <Link href="/terminos">Términos de Servicio</Link>
            <Link href="/log">Log de Operaciones</Link>
          </div>

        </div>
      </div>
    </footer>
  );
}


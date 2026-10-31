import { Link } from 'react-router-dom'
import PageHeader from '@/components/layout/PageHeader'
export default function NotFound() {
  return (
    <PageHeader mal="404" title="This page isn’t here" intro="The link may be old or mistyped. Head back to the home page or find a centre near you.">
      <div className="mt-10 flex gap-3"><Link to="/" className="btn-flame">Go to home page</Link><Link to="/contact" className="btn-ghost-light">Find a centre</Link></div>
    </PageHeader>
  )
}

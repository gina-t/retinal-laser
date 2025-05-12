import { Link } from 'react-router-dom';
import { ContentWrapper } from './ContentWrapper';

export function ContentHeader({
  id, 
}: {
  id: string; 
}) {
  return (
    <header className="relative mb-10 xl:mb-0">
      <ContentWrapper>
        <div className="flex">
          <Link to={`#${id}`} className="inline-flex"> 
          
          </Link>
        </div>
      </ContentWrapper>
    </header>
  );
}

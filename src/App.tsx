import './styles/global.scss';
import './styles/sidebar.scss';
import './styles/content.scss';

import { SideBarProvider } from './context/SideBarContext';
import { SideBar } from './components/SideBar';
import { Content } from './components/Content';
import { ContentProvider } from './context/ContentContext';

export interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

export function App() {
  return (
    <SideBarProvider>
      <ContentProvider>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <SideBar/>
          <Content/>
        
        </div>
      </ContentProvider>
    </SideBarProvider>
  )
}
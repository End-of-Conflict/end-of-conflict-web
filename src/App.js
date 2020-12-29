/**
 * End of Conflict Web
 * @flow
 */
import React from 'react';
import Main from './components/main/Main';
import {library} from '@fortawesome/fontawesome-svg-core'
import {
  faBars,
  faCheck,
  faCheckSquare,
  faChevronLeft,
  faChevronRight,
  faChevronUp,
  faChevronDown,
  faCropAlt,
  faExclamationTriangle,
  faImage,
  faInfoCircle,
  faPencilAlt,
  faRedo,
  faSave,
  faSearch,
  faSpinner,
  faTimes,
  faEnvelope,
  faGlobe,
} from '@fortawesome/free-solid-svg-icons';
import {
  faSquare,
} from '@fortawesome/free-regular-svg-icons';
import {
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import './App.css';
library.add(
  faBars,
  faCheck,
  faCheckSquare,
  faChevronLeft,
  faChevronRight,
  faChevronUp,
  faChevronDown,
  faCropAlt,
  faExclamationTriangle,
  faImage,
  faInfoCircle,
  faPencilAlt,
  faRedo,
  faSave,
  faSearch,
  faSpinner,
  faSquare,
  faTimes,
  faEnvelope,
  faGlobe,
  faGithub,
);

type Props = {};

const  App = (): React$Element<(props: Props) => React$Element<"div">> => {
  return (
    <Main />
  );
}

export default App;

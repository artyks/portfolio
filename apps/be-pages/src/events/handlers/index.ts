import { PageElementsEventHandlers } from './page-elements';
import { PageEventHandlers } from './pages';

const EventHandlers = [...PageElementsEventHandlers, ...PageEventHandlers];

export { EventHandlers };

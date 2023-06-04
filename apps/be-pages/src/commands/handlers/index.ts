import * as pageElementsCommandHandlers from './page-elements';
import * as pagesCommandHandlers from './pages';

const CommandHandlers = [...Object.values(pageElementsCommandHandlers), ...Object.values(pagesCommandHandlers)];

export { CommandHandlers };

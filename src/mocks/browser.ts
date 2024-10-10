import { setupWorker } from 'msw/browser';
import { mainHandlers } from './mainHandlers';
import { detailHandlers } from './detailHandlers';
import { mapHandlers } from './mapHandlers';

export const worker = setupWorker(...mainHandlers, ...detailHandlers, ...mapHandlers);
export default worker;

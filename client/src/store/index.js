import { atom } from 'jotai';

const userName = atom('');
const isUser = atom(false);
const userId = atom('');

export {userName, isUser, userId};
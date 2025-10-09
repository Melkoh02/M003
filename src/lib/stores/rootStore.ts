import { UserStore } from './userStore';
import { LanguageStore } from './languageStore.ts';
import { ThemeStore } from './themeStore.ts';

export class RootStore {
  userStore: UserStore;
  languageStore: LanguageStore;
  themeStore: ThemeStore;

  constructor() {
    this.userStore = new UserStore();
    this.languageStore = new LanguageStore();
    this.themeStore = new ThemeStore();
  }
}

const rootStore = new RootStore();
export default rootStore;

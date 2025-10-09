import { action, makeAutoObservable, observable, runInAction } from 'mobx';
import { lightTheme } from '../../themes/light';
import { darkTheme } from '../../themes/dark';
import type { Scheme } from '../types/theme.ts';
import { THEME_KEY } from '../constants';

export class ThemeStore {
  scheme: Scheme = 'light';

  constructor() {
    makeAutoObservable(this, {
      scheme: observable,
      toggle: action.bound,
      setScheme: action.bound,
      theme: false,
    });
    this.loadScheme();
    try {
      const mq = window.matchMedia?.('(prefers-color-scheme: dark)');
      mq?.addEventListener?.('change', e => {
        const saved = localStorage.getItem(THEME_KEY) as Scheme | null;
        if (!saved) this.setScheme(e.matches ? 'dark' : 'light');
      });
    } catch {}
  }

  setScheme(next: Scheme) {
    this.scheme = next;
    localStorage.setItem(THEME_KEY, next);
  }

  toggle() {
    this.setScheme(this.scheme === 'light' ? 'dark' : 'light');
  }

  get theme() {
    return this.scheme === 'light' ? lightTheme : darkTheme;
  }

  private loadScheme() {
    try {
      const saved = localStorage.getItem(THEME_KEY) as Scheme | null;
      if (saved === 'light' || saved === 'dark') {
        runInAction(() => (this.scheme = saved));
        return;
      }
      const prefersDark = window.matchMedia?.(
        '(prefers-color-scheme: dark)',
      )?.matches;
      runInAction(() => (this.scheme = prefersDark ? 'dark' : 'light'));
    } catch {
      // ignore
    }
  }
}

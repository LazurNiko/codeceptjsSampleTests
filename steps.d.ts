/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file');
type listApi = import('./listapi_helper');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any }
  interface Methods extends Playwright, listApi {}
  interface I extends ReturnType<steps_file>, WithTranslation<listApi> {}
  namespace Translation {
    interface Actions {}
  }
}

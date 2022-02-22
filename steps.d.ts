/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file');
type listApi = import('./findApi_helper');
type getHeaderList = import('./getHeaderList_helper');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any }
  interface Methods extends Playwright, listApi, getHeaderList {}
  interface I extends ReturnType<steps_file>, WithTranslation<listApi>, WithTranslation<getHeaderList> {}
  namespace Translation {
    interface Actions {}
  }
}

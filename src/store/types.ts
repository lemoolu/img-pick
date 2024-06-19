export enum Suffix {
  PNG = 'png',
  JPG = 'jpg',
  RAW = 'raw',
};

export const ImagesSuffix: string[] = [Suffix.JPG, Suffix.PNG];

export enum FileTag {
  Del = 'del',
  NotDel = 'notDel'
}

export interface Dir {
  /** 目录地址 */
  path: string;
  /** 目录名称 */
  name: string;
  files: File[];
  selected?: boolean;
}
/** 文件 */
export interface File {
  /** 文件目录 */
  dir: string;
  /** 文件地址 */
  path: string;
  /** 文件名 */
  name: string;
  /** 文件服务地址 */
  url: string;
  /** 文件名，不包含后缀 */
  pureName: string;
  /** 后缀名 */
  suffix: string;
}
/** 同名分组 */
export interface FileGroup {
  /** 文件名，不包含后缀 */
  pureName: string;
  imageFile?: File;
  files?: File[];
  tags?: FileTag[];
  isSelected?: boolean;
}
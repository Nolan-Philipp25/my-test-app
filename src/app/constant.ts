export enum IType {
    TEXT = 'text',
    LONG_TEXT = 'longtext',
    DROPDOWN = 'dropdown',
    NUMBER = 'number',
}

export interface IField {
    id: string,
    defaultValue?: string | number | boolean;
    value?: string | number | boolean;
    validation?: string;
    min_value?: number;
    max_value?: number;
    options?: string[] | number[];
    type: IType
}

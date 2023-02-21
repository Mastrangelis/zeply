import { ChangeEventHandler, FormEventHandler } from 'react';
import { SelectOption } from './select';

type Filter = 'transaction' | 'address';

type SpellCheck = 'true' | 'false';

type InputAttributes = {
    autoCapitalize: string;
    autoComplete: string;
    autoCorrect: string;
    spellCheck: SpellCheck;
    [x: string]: string;
};

type SeachProps = {
    isDisabled: boolean;
    searchTerm: string;
    placeholderTxt: string;
    onSubmit: FormEventHandler<HTMLFormElement>;
    onChange: ChangeEventHandler<HTMLInputElement>;
    inputAttributes?: InputAttributes;
};

type SearchBarProps = {
    listItems: SelectOption[];
};

export type { Filter, SpellCheck, InputAttributes, SeachProps, SearchBarProps };

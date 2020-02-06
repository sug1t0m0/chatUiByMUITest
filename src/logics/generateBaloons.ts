export interface Option {
  id: number;
  url: string;
}

export interface BaloonOption extends Option {
  optionString: string;
}

export interface Context {
  id: number;
  optionString: string;
  questionersMessageString: string;
  ownMessages: string[];
  options: Option[];
}

// TODO ドメイン層に入れるかLogicで持っておくかは一旦保留
export interface Baloon {
  isOwn: boolean;
  messageString: string;
  options: BaloonOption[];
}

// TODO テストを書く
export const generateBaloons = (
  contextId: number,
  contexts: Context[]
): Baloon[] => {
  const context = contexts.find(c => c.id === contextId);
  if (!context) {
    return [];
  }
  const options = generateOpions(contexts, context);
  const ownMessageBaloons = generateOwnMessageBaloons(context, options);
  return [
    {
      isOwn: false,
      messageString: context.questionersMessageString,
      options: []
    },
    ...ownMessageBaloons
  ];
};

const generateOpions = (
  contexts: Context[],
  context: Context
): BaloonOption[] => {
  if (!context) {
    return [];
  }
  // mapで十分だとは思ったが, optionStringが発見できなかった時点で
  // レンダリングの候補から外した方がトラブルは少なそう
  const options = context.options.reduce(
    (prevOptions: BaloonOption[], option) => {
      const contex = contexts.find(c => c.id === option.id);
      if (contex) {
        prevOptions.push({
          ...option,
          optionString: contex.optionString
        });
      }
      return prevOptions;
    },
    []
  );

  return options;
};

const generateOwnMessageBaloons = (
  context: Context,
  options: BaloonOption[]
): Baloon[] => {
  const baloons = context.ownMessages.map((message, index) => {
    const isLast = context.ownMessages.length - 1 === index;
    return {
      isOwn: true,
      messageString: message,
      options: isLast ? options : []
    };
  });
  return baloons;
};

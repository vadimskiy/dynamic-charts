import { FC } from 'react';

import { ModelsListProps } from './interfaces';

export const models: any = {
    'AAPL': {
      name: 'AAPL',
      color: 'blue',
      range: '0 - 99',
    },
    'TSLA': {
      name: 'TSLA',
      color: 'red',
      range: '0 - 99',
    },
    'MSFT': {
      name: 'MSFT',
      color: 'green',
      range: '0 - 99',
    },
};

const ModelsList: FC<ModelsListProps> = ({ handleClick, charts }) => {
    return (
        <>
            {
                models && (
                    <fieldset>
                        <legend>
                            Available equities
                        </legend>
                        {
                            Object.entries(models)?.map((item: any, i: number) => {
                                const model = models[item[0]];
                                const {name} = model;
                                console.log('charts: ', charts);
                                return (
                                    <div key={name}>
                                    <label>
                                        {name}
                                        <input type="checkbox" name={name} value={name} onClick={(e) => handleClick(e.currentTarget.value)} />
                                    </label>
                                    </div>
                                );
                            })
                        }
                    </fieldset>
                )
            }
        </>
    );
};

export default ModelsList;

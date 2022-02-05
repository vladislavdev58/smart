export const generateDataTable = (config, data) => config.map(({name, keys}) => ({name, items: keys.map((key) => data[key])}))
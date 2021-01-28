
export type LocalManagerConfig = {
    readonly storage: 'localStorage' | 'sessionStorage';
  };
  
export class LocalManager<T extends string> {
    readonly storage = window.localStorage;

    constructor(config: LocalManagerConfig = {storage:"localStorage"}) {
        if (config.storage === 'sessionStorage')
        this.storage = window.sessionStorage;
        else this.storage = window.localStorage;
    }

    save(key: T, value: string | number | Object): void {
        let _value = value;

        if (typeof value === 'number') {
        _value = value.toString();
        }

        if (typeof value === 'object') {
        try {
            _value = JSON.stringify(value);
        } catch (e) {
            this.storage.removeItem(key);
            console.error('LocalManager::saveLocal:stringFyFailed');
            console.error(e);
        }
        }

        if (typeof _value === 'string') this.storage.setItem(key, _value);
    }

    getObj<O>(key: T, or: O | undefined = undefined): O | undefined {
        const value = this.storage.getItem(key) || '';
        let result = or;

        try {
        result = JSON.parse(value);
        } catch (e) {
        this.storage.removeItem(key);
        console.error('LocalManager::getLocalOj:parseFailed');
        console.error(e);
        }

        return result;
    }

    get(key: T, or: string = ""): string {
        const item = this.storage.getItem(key) || '';
        return item || or;
    }

    getNum(key: T, or: number = 0): number {
        const item = this.storage.getItem(key) || '';
        return parseInt(item) || or;
    }
}

type TlocalKeys = "lastAccessCode";
export const localManager = new LocalManager<TlocalKeys>() 
  
export default LocalManager;
  
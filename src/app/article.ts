export class Article {
    id: number;
    title: string;
    description: string;

    public toString = () : string => {
        return `[id=${this.id}, title=${this.title}]`;
    }
}

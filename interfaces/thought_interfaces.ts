export interface IThoughtPage {
    thoughtPage: {
        id: string;
        thoughtHeading: string;
        postDate: string;
        postImage: {
            url: string;
        }
        postText: string;
        slug: string;
    }
}
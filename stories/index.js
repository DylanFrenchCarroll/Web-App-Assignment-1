import React from 'react';
import { storiesOf } from '@storybook/react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import NewsForm from '../src/components/newsForm/';

storiesOf("Hacker App/News Form", module).add("default", () => <NewsForm />);

import NewsItem from '../src/components/newsItem';

const post = {
    id: 1 ,
    title : 'Post 1.',
    link : 'http://www.foo.bar',
    author : 'Joe Bloggs',
    comments : [],
    upvotes: 10
};
import NewsItem from '../src/components/newsItem';

const post = {
    id: 1 ,
    title : 'Post 2.',
    link : 'http://www.foo.bar',
    author : 'Joe Bloggs2',
    comments : [],
    upvotes: 20
};

storiesOf('Hacker App/News Item', module)
    .add('default', () => <NewsItem post= { post }  />
    )
    .add('No hyperlink', () => <NewsItem post= { { ...post, link: ''} }  />
    )
import React from 'react';
import { InMemoryCategoryRepository } from './infrastructure/InMemoryCategoryRepository';
import { InMemoryProductRepository } from './infrastructure/InMemoryProductRepository';
import { Layout } from './sections/layout/Layout';

const inMemoryCategoryRepository = new InMemoryCategoryRepository();
const inMemoryProductRepository = new InMemoryProductRepository();


export function LayoutFactory(){

    return(
        <Layout
            inMemoryCategoryRepository={inMemoryCategoryRepository}
            inMemoryProductRepository={inMemoryProductRepository}
        />
    );
}
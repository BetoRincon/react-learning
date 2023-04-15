import React from 'react';
import { InMemoryCategoryRepository } from './infrastructure/InMemoryCategoryRepository';
import { Layout } from './sections/layout/Layout';

const inMemoryCategoryRepository = new InMemoryCategoryRepository()


export function LayoutFactory(){

    return(
        <Layout inMemoryCategoryRepository={inMemoryCategoryRepository} />
    );
}
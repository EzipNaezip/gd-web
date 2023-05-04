import React from 'react';
import FilterButton from './FilterButton';

export default function DiscoverButtons() {
  return (
    <>
      <div className="flex gap-4">
        <FilterButton name="TOP 30" />
        <FilterButton name="인기급상승" />
        <FilterButton name="모던" />
        <FilterButton name="클래식" />
        <FilterButton name="내추럴" />
      </div>
    </>
  );
}

import React from 'react'

const PostFilter = () => {
  return (
    <div>
        <MyInput 
          type="text"
          placeholder="Поиск"
          value={searchQuary}
          onChange={e => setSearchQuary(e.target.value)}
        />
        <MySelect 
          value={selecterSort}
          onChange={sortPosts}
          defaultValue="Сортировка"
          options={[
            {value: "title", name: "По названию"},
            {value: "body", name: "По описанию"}
          ]}
        />
      </div>
  )
}

export default PostFilter
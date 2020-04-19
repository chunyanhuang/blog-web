/*
 * @Author: 柒叶
 * @Date: 2020-04-16 06:32:48
 * @Last Modified by: 柒叶
 * @Last Modified time: 2020-04-18 17:56:08
 */

import React from 'react'
import ReactMarkdown from 'react-markdown'
// import ReactMarkdown from 'react-markdown/with-html'
import CodeTag from './CodeTag'
import ImageTag from './ImageTag'
import HeadTag from './HeadTag'
import MathTag from './MathTag'
import MathInline from './MathInline'

const Markdown = props => {
  const { markdown } = props
  return (
    <ReactMarkdown
      source={markdown}
      linkTarget={() => '_blank'}
      plugins={[[require('remark-math')]]}
      renderers={{
        code: CodeTag,
        image: ImageTag,
        heading: HeadTag,
        math: MathTag,
        inlineMath: MathInline,
      }}
    />
  )
}

export default Markdown

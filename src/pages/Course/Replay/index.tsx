import { useCallback, useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { find } from 'lodash'
import { message, Tooltip, Popover } from 'antd'
import { getReplayOfCourse } from '@/api'
import VideoReplayer from '@/components/VideoReplayer'
// @ts-ignore
import { CopyToClipboard } from 'react-copy-to-clipboard'

import './index.scss'
import Icon from '@/components/Icon'

const CourseReplay = () => {
  const { id: courseId, replayId } = useParams()
  const [replay, setReplay] = useState<any>()
  const navigate = useNavigate()

  const initData = useCallback(async () => {
    const replayList = await getReplayOfCourse(courseId!)
    const replay = find(replayList, ({ id }) => `${id}` === replayId)
    setReplay(replay)
  }, [courseId])

  useEffect(() => {
    initData()
  }, [initData])

  const videoHotkeyHelp = useMemo(
    () => (
      <div className="video-hotkeys-help">
        <ul>
          <li>
            <span>space</span> 控制<span>暂停/播放</span>
          </li>
          <li>
            <span>&larr;/&rarr;</span> 控制<span>后退/前进(15秒)视频</span>
          </li>
          <li>
            <span>&uarr;/&darr;</span> 控制<span>放大/缩小音量</span>
          </li>
          <li>
            <span>m</span> 触发<span>静音</span>
          </li>
          <li>
            <span>f/双击</span> 触发<span>全屏</span>
          </li>
          <li>
            <span>数字0-9</span> 跳转视频百分比<span>0 is 0% and 9 is 90%</span>
          </li>
        </ul>
      </div>
    ),
    []
  )

  return (
    <div className="video-replay-modal">
      <header>
        <div className="title">{replay?.className}</div>
        <div className="actions">
          <Popover content={videoHotkeyHelp} title="播放器快捷键" trigger="click" placement='leftTop'>
            <Icon symbol="icon-help" className='hotkey-help'/>
          </Popover>
          <Tooltip title="复制链接">
            <CopyToClipboard
              text={window.location.href}
              onCopy={() => {
                message.success('复制成功!')
              }}
            >
              <Icon symbol="icon-share" />
            </CopyToClipboard>
          </Tooltip>
          <Tooltip title="返回课程">
            <Icon symbol="icon-fanhui" onClick={() => navigate(`/${courseId}`)} />
          </Tooltip>
        </div>
      </header>
      <div className="video-replay-content">
        <VideoReplayer replay={replay} />
      </div>
    </div>
  )
}

export default CourseReplay

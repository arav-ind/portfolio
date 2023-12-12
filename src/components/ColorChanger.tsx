'use client'

// TODO: Modify the Component
export default function ColorChanger() {
    const baseStyle = 'w-4 h-4 rounded-sm opacity-50 hover:opacity-100 border border-gray-300'
    const a = 'linear-gradient(179deg, rgba(0, 62, 54, 0.68) 1.23%, rgb(0, 0, 0) 107.33%) repeat scroll 0% 0% / auto padding-box border-box'
    const b = 'linear-gradient(179deg, rgba(62, 0, 0, 0.68) 1.23%, rgb(0, 0, 0) 107.33%) repeat scroll 0% 0% / auto padding-box border-box'
    const c = 'linear-gradient(179deg, rgba(0, 0, 0, 1) 1.23%, rgb(0, 0, 0) 107.33%) repeat scroll 0% 0% / auto padding-box border-box'
    const d = 'linear-gradient(179deg, rgba(36, 62, 0, 0.68) 1.23%, rgb(0, 0, 0) 107.33%) repeat scroll 0% 0% / auto padding-box border-box'
    const e = 'linear-gradient(179deg, rgba(9, 0, 62, 0.68) 1.23%, rgb(0, 0, 0) 107.33%) repeat scroll 0% 0% / auto padding-box border-box'

    const handleMouseOver = (color: string) => {
        const body = document.body
        body.style.background = color
    }

  return (
    <div className='md:flex hidden flex-row absolute bottom-0 right-2 gap-2'>
        <div className={`${baseStyle} bg-[#003E36AD]`} onMouseEnter={() => handleMouseOver(a)}/>
        <div className={`${baseStyle} bg-[#3E0000AD]`} onMouseEnter={() => handleMouseOver(b)}/>
        <div className={`${baseStyle} bg-gray-800`} onMouseEnter={() => handleMouseOver(c)}/>
        <div className={`${baseStyle} bg-[#243E00AD]`} onMouseEnter={() => handleMouseOver(d)}/>
        <div className={`${baseStyle} bg-[#09003EAD]`} onMouseEnter={() => handleMouseOver(e)}/>
    </div>
  )
}
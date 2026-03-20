'use client'

// Hook Imports
import useVerticalNav from '@menu/hooks/useVerticalNav'

const NavToggle = () => {
  // Hooks
  const { toggleVerticalNav } = useVerticalNav()

  const handleClick = () => {
    toggleVerticalNav()
  }

  return (
    <i className='tabler-menu-2 cursor-pointer' onClick={handleClick} />
  )
}

export default NavToggle

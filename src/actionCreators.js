export const getPageContent = () => ({
  type: "GET_PAGE_CONTENT"
})

export const showPageContent = pageContent => ({
  type: "SHOW_PAGE_CONTENT",
  pageContent
})

export const setModalData = modalData => ({
  type: "SET_MODAL_DATA",
  modalData
})

export const setModal = boolean => ({
  type: "SET_MODAL",
  boolean
})
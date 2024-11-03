module ApplicationHelper
  def react_component(component)
    tag.div(id: "react-container", data: { component: })
  end
end

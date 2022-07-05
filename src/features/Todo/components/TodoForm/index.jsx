import React from "react";
import PropTypes from "prop-types";
import InputField from "../../../../components/form-controls/InputField";

// Thằng này nó sẽ báo lên thằng cha, tui sẽ gọi hàm onsubmit này mỗi khi user submit nhé
TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

function TodoForm(props) {
  return (
    <div>
      Todo form
      <InputField />
    </div>
  );
}

export default TodoForm;

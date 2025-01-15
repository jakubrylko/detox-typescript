import { useContext } from 'react'
import MemberForm from '../../components/memberComponents/MemberForm'
import MemberContext from '../../context/MemberContext'

const AddMemberScreen = ({ navigation }) => {
  const { addMember } = useContext(MemberContext)

  return (
    <MemberForm
      onSubmit={(newMember) => {
        addMember(newMember, () => navigation.navigate('Members'))
      }}
    />
  )
}

AddMemberScreen.navigationOptions = {
  headerTitle: 'Add Member',
  headerTitleAlign: 'center'
}

export default AddMemberScreen

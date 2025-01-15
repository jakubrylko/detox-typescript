import { useContext } from 'react'
import MemberForm from '../../components/memberComponents/MemberForm'
import MemberContext from '../../context/MemberContext'

const EditMemberScreen = ({ navigation }) => {
  const id = navigation.getParam('id')
  const { data, editMember } = useContext(MemberContext)

  const member = data.find((member) => member.id === id)

  return (
    <MemberForm
      initialValues={{
        name: member.name,
        surname: member.surname,
        email: member.email,
        dateOfBirth: member.dateOfBirth,
        startDay: member.startDay,
        addressLineOne: member.addressLineOne,
        addressLineTwo: member.addressLineTwo,
        city: member.city,
        postcode: member.postcode,
        country: member.country,
        startDate: member.startDate,
        startTime: member.startTime
      }}
      onSubmit={(editedMember) => {
        editMember(id, editedMember, () => navigation.pop())
      }}
    />
  )
}

EditMemberScreen.navigationOptions = ({ navigation }) => {
  const id = navigation.getParam('id')

  return {
    headerTitle: `Edit Member ${id}`,
    headerTitleAlign: 'center'
  }
}

export default EditMemberScreen

import Input from '../../ui/Input/Input';
import { nameRule, phoneRule, emailRule } from '../../utils/contactValidation';

const ContactFields = ({ register, errors }) => (
  <>
    <Input placeholder="Name" error={errors.name?.message} {...register('name', nameRule)} />
    <Input placeholder="Phone number" error={errors.phone?.message} {...register('phone', phoneRule)} />
    <Input placeholder="Email" error={errors.email?.message} {...register('email', emailRule)} />
  </>
);

export default ContactFields;

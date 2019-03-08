import * as Yup from 'yup';

const ProposalSchema = Yup.object().shape({
  coApplicants: Yup.array().of(
    Yup.object().shape({
      email: Yup.string().email()
      // these constraints take precedence
    })
  ),
  collaborators: Yup.array().of(
    Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email()
    })
  ),
  title: Yup.string().required('Required!'),
  duration: Yup.number().required('Required!'),
  nprArea: Yup.string().required('Required!'),
  proposal_legal_remit: Yup.string().required('Required!'),
  ethicalAnimals: Yup.string().required('Required!'),
  ethicalMaterials: Yup.string().required('Required!'),
  country: Yup.string().required('Required!'),
  scientificAbstract: Yup.string().required('Required!'),
  layAbstract: Yup.string().required('Required!')
});

export default ProposalSchema;

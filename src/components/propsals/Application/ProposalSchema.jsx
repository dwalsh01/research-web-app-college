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
  title: Yup.string(),
  duration: Yup.number(),
  nprArea: Yup.string(),
  proposal_legal_remit: Yup.string(),
  ethicalAnimals: Yup.string(),
  ethicalMaterials: Yup.string(),
  country: Yup.string(),
  scientificAbstract: Yup.string(),
  layAbstract: Yup.string()
});

export default ProposalSchema;

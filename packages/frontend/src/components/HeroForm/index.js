import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import createHero from "./../../api";
import { connect } from "react-redux";
import ACTION_TYPES from "../../actions/actionsType.js";
import * as Yup from "yup";

const mySchema = Yup.object().shape({
	nickname: Yup.string()
		.min(2, "Too Short!")
		.max(50, "Too Long!")
		.required("Required"),
	realName: Yup.string()
		.min(2, "Too Short!")
		.max(50, "Too Long!")
		.required("Required"),
	originDescription: Yup.string().max(250, "Too Long!"),
	catchPhrase: Yup.string().max(200, "Too Long!"),
	superpowers: Yup.string()
		.min(2, "Too Short!")
		.max(150, "Too Long!")
		.required("Required"),
});

function HeroForm() {
	return (
		<div>
			<h1>Create your hero!</h1>
			<Formik
				initialValues={{
					nickname: "",
					realName: "",
					originDescription: "",
					catchPhrase: "",
					superpowers: "",
				}}
				onSubmit={async (values) => {
					await new Promise((r) => setTimeout(r, 500));
					alert(JSON.stringify(values, null, 2));
					validationSchema = { mySchema };
					createHero(values);
					values = initialValues;
				}}
			>
				<Form>
					<label htmlFor="nickname">Nick Name</label>
					<Field id="nickname" name="nickname" placeholder="Nick" />

					<label htmlFor="realName">Last Name</label>
					<Field id="realName" name="realName" placeholder="Name" />

					<label htmlFor="originDescription">Description</label>
					<Field
						id="originDescription"
						name="originDescription"
						type="textarea"
						placeholder="Something bout your hero"
					/>

					<label htmlFor="catchPhras">Description</label>
					<Field
						id="catchPhras"
						name="catchPhras"
						type="textarea"
						placeholder="Superhero's phrase!"
					/>

					<label htmlFor="superpowers">Description</label>
					<Field id="superpowers" name="csuperpowers" placeholder="Powers" />

					<button type="submit">Submit</button>
				</Form>
			</Formik>
		</div>
	);

	const mapStateToProps = (state) => {
		const { heroesState } = state;
		return heroesState;
	};

	const mapDispatchToProps = (dispatch) => {
		return {
			createHeroesRequest: () =>
				dispatch({ type: ACTION_TYPES.CREATE_HERO_REQUEST }),
			createHeroSuccess: (data) =>
				dispatch({ type: ACTION_TYPES.CREATE_HERO_SUCCESS, hero: data }),
			createHeroError: (error) =>
				dispatch({ type: ACTION_TYPES.CREATE_HERO_ERROR, error }),
		};
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroForm);

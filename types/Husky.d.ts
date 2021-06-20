type Husky = Model & {
	husky_c_geo: MeshPart & {
		SurfaceAppearance: SurfaceAppearance;
		root_c_jnt: Bone & {
			pelvis_c_jnt: Bone & {
				thigh_r_jnt: Bone & {
					knee_r_jnt: Bone & {
						tarsal_r_jnt: Bone & {
							ballBack_r_jnt: Bone & {
								toeBack_r_jnt: Bone;
							};
						};
					};
				};
				thigh_l_jnt: Bone & {
					knee_l_jnt: Bone & {
						tarsal_l_jnt: Bone & {
							ballBack_l_jnt: Bone & {
								toeBack_l_jnt: Bone;
							};
						};
					};
				};
				tail01_c_jnt: Bone & {
					tail02_c_jnt: Bone & {
						tail03_c_jnt: Bone & {
							tail04_c_jnt: Bone;
						};
					};
				};
			};
			spine01_c_jnt: Bone & {
				spine02_c_jnt: Bone & {
					spine03_c_jnt: Bone & {
						driver_shoulderUp_l_jnt: Bone & {
							driver_shoulder_l_jnt: Bone;
						};
						shoulderUp_l_jnt: Bone & {
							shoulder_l_jnt: Bone & {
								elbow_l_jnt: Bone & {
									carpal_l_jnt: Bone & {
										ballFront_l_jnt: Bone & {
											toeFront_l_jnt: Bone;
										};
									};
								};
							};
						};
						shoulderUp_r_jnt: Bone & {
							shoulder_r_jnt: Bone & {
								elbow_r_jnt: Bone & {
									carpal_r_jnt: Bone & {
										ballFront_r_jnt: Bone & {
											toeFront_r_jnt: Bone;
										};
									};
								};
							};
						};
						neck_c_jnt: Bone & {
							head_c_jnt: Bone & {
								earBase_r_jnt: Bone & {
									earMid_r_jnt: Bone & {
										earEnd_r_jnt: Bone;
									};
								};
								jaw_c_jnt: Bone & {
									jawEnd_c_jnt: Bone;
									nose_c_jnt: Bone & {
										noseEnd_c_jnt: Bone;
									};
								};
								earBase_l_jnt: Bone & {
									earMid_l_jnt: Bone & {
										earEnd_l_jnt: Bone;
									};
								};
							};
						};
					};
				};
			};
		};
	};
	Humanoid: Humanoid;
	InitialPoses: Folder & {
		ballFront_l_jnt_Initial: CFrameValue;
		driver_knee_l_jnt_Original: CFrameValue;
		driver_toeBack_l_jnt_Original: CFrameValue;
		driver_ballFront_l_jnt_Composited: CFrameValue;
		driver_toeBack_r_jnt_Original: CFrameValue;
		ballBack_r_jnt_Composited: CFrameValue;
		geo_c_grp_Initial: CFrameValue;
		nose_c_jnt_Original: CFrameValue;
		jawEnd_c_jnt_Initial: CFrameValue;
		toeBack_l_jnt_Original: CFrameValue;
		pelvis_c_jnt_Initial: CFrameValue;
		driver_ballBack_l_jnt_Composited: CFrameValue;
		driver_shoulderUp_r_jnt_Initial: CFrameValue;
		elbow_l_jnt_Composited: CFrameValue;
		elbow_l_jnt_Initial: CFrameValue;
		elbow_r_jnt_Original: CFrameValue;
		shoulder_l_jnt_Original: CFrameValue;
		driver_ballBack_l_jnt_Initial: CFrameValue;
		tail04_c_jnt_Original: CFrameValue;
		skeleton_c_grp_Initial: CFrameValue;
		driver_knee_r_jnt_Original: CFrameValue;
		jaw_c_jnt_Initial: CFrameValue;
		toeFront_r_jnt_Composited: CFrameValue;
		spine03_c_jnt_Initial: CFrameValue;
		ballFront_l_jnt_Composited: CFrameValue;
		spine03_c_jnt_Original: CFrameValue;
		ballBack_l_jnt_Original: CFrameValue;
		earBase_l_jnt_Composited: CFrameValue;
		root_c_jnt_Original: CFrameValue;
		carpal_l_jnt_Original: CFrameValue;
		geo_c_grp_Composited: CFrameValue;
		spine02_c_jnt_Original: CFrameValue;
		driver_shoulder_r_jnt_Original: CFrameValue;
		shoulder_l_jnt_Initial: CFrameValue;
		neck_c_jnt_Initial: CFrameValue;
		spine01_c_jnt_Composited: CFrameValue;
		earMid_r_jnt_Composited: CFrameValue;
		earEnd_r_jnt_Composited: CFrameValue;
		knee_r_jnt_Composited: CFrameValue;
		knee_l_jnt_Original: CFrameValue;
		husky_c_geo_Initial: CFrameValue;
		neck_c_jnt_Composited: CFrameValue;
		husky_c_geo_Composited: CFrameValue;
		driver_toeFront_r_jnt_Original: CFrameValue;
		noseEnd_c_jnt_Initial: CFrameValue;
		neck_c_jnt_Original: CFrameValue;
		headEnd_c_jnt_Original: CFrameValue;
		earBase_r_jnt_Initial: CFrameValue;
		driver_shoulder_l_jnt_Original: CFrameValue;
		ballFront_r_jnt_Initial: CFrameValue;
		driver_carpal_r_jnt_Composited: CFrameValue;
		nose_c_jnt_Initial: CFrameValue;
		earBase_r_jnt_Original: CFrameValue;
		earBase_r_jnt_Composited: CFrameValue;
		earMid_r_jnt_Initial: CFrameValue;
		spine02_c_jnt_Composited: CFrameValue;
		thigh_l_jnt_Composited: CFrameValue;
		driver_ballFront_l_jnt_Original: CFrameValue;
		driver_elbow_l_jnt_Composited: CFrameValue;
		driver_ballFront_r_jnt_Initial: CFrameValue;
		driver_thigh_l_jnt_Initial: CFrameValue;
		ballBack_l_jnt_Composited: CFrameValue;
		jaw_c_jnt_Composited: CFrameValue;
		driver_carpal_r_jnt_Initial: CFrameValue;
		thigh_l_jnt_Initial: CFrameValue;
		earEnd_r_jnt_Initial: CFrameValue;
		thigh_r_jnt_Original: CFrameValue;
		thigh_r_jnt_Composited: CFrameValue;
		shoulderUp_l_jnt_Initial: CFrameValue;
		head_c_jnt_Original: CFrameValue;
		earEnd_l_jnt_Original: CFrameValue;
		earMid_l_jnt_Initial: CFrameValue;
		driver_toeBack_r_jnt_Initial: CFrameValue;
		thigh_l_jnt_Original: CFrameValue;
		tail01_c_jnt_Original: CFrameValue;
		driver_toeBack_r_jnt_Composited: CFrameValue;
		driver_tarsal_r_jnt_Composited: CFrameValue;
		driver_tarsal_l_jnt_Initial: CFrameValue;
		shoulderUp_l_jnt_Original: CFrameValue;
		driver_ballBack_r_jnt_Initial: CFrameValue;
		driver_elbow_l_jnt_Initial: CFrameValue;
		driver_ballBack_r_jnt_Original: CFrameValue;
		shoulderUp_r_jnt_Composited: CFrameValue;
		driver_ballBack_r_jnt_Composited: CFrameValue;
		tarsal_l_jnt_Original: CFrameValue;
		driver_tarsal_r_jnt_Initial: CFrameValue;
		jaw_c_jnt_Original: CFrameValue;
		driver_tarsal_r_jnt_Original: CFrameValue;
		driver_knee_r_jnt_Initial: CFrameValue;
		driver_knee_r_jnt_Composited: CFrameValue;
		driver_ballFront_r_jnt_Original: CFrameValue;
		elbow_r_jnt_Initial: CFrameValue;
		carpal_l_jnt_Initial: CFrameValue;
		huskyRig_c_grp_Initial: CFrameValue;
		toeFront_l_jnt_Initial: CFrameValue;
		driver_thigh_r_jnt_Initial: CFrameValue;
		huskyRig_c_grp_Original: CFrameValue;
		ballFront_r_jnt_Original: CFrameValue;
		driver_thigh_r_jnt_Composited: CFrameValue;
		toeBack_r_jnt_Initial: CFrameValue;
		toeBack_r_jnt_Original: CFrameValue;
		toeBack_r_jnt_Composited: CFrameValue;
		ballBack_r_jnt_Initial: CFrameValue;
		ballBack_r_jnt_Original: CFrameValue;
		tarsal_r_jnt_Initial: CFrameValue;
		noseEnd_c_jnt_Composited: CFrameValue;
		head_c_jnt_Initial: CFrameValue;
		tarsal_r_jnt_Original: CFrameValue;
		tail03_c_jnt_Original: CFrameValue;
		tarsal_r_jnt_Composited: CFrameValue;
		husky_c_geo_Original: CFrameValue;
		shoulderUp_r_jnt_Original: CFrameValue;
		knee_r_jnt_Initial: CFrameValue;
		driver_shoulderUp_r_jnt_Original: CFrameValue;
		thigh_r_jnt_Initial: CFrameValue;
		shoulder_r_jnt_Initial: CFrameValue;
		driver_toeBack_l_jnt_Composited: CFrameValue;
		head_c_jnt_Composited: CFrameValue;
		driver_ballBack_l_jnt_Original: CFrameValue;
		nose_c_jnt_Composited: CFrameValue;
		carpal_l_jnt_Composited: CFrameValue;
		earEnd_r_jnt_Original: CFrameValue;
		driver_tarsal_l_jnt_Composited: CFrameValue;
		shoulder_r_jnt_Original: CFrameValue;
		driver_knee_l_jnt_Initial: CFrameValue;
		driver_shoulder_r_jnt_Composited: CFrameValue;
		ballFront_r_jnt_Composited: CFrameValue;
		driver_thigh_l_jnt_Original: CFrameValue;
		root_c_jnt_Composited: CFrameValue;
		spine03_c_jnt_Composited: CFrameValue;
		driver_elbow_r_jnt_Initial: CFrameValue;
		driver_toeFront_r_jnt_Initial: CFrameValue;
		tail02_c_jnt_Composited: CFrameValue;
		jawEnd_c_jnt_Original: CFrameValue;
		tarsal_l_jnt_Initial: CFrameValue;
		ballBack_l_jnt_Initial: CFrameValue;
		driver_thigh_r_jnt_Original: CFrameValue;
		knee_l_jnt_Initial: CFrameValue;
		toeFront_l_jnt_Composited: CFrameValue;
		carpal_r_jnt_Original: CFrameValue;
		spine02_c_jnt_Initial: CFrameValue;
		driver_carpal_l_jnt_Original: CFrameValue;
		driver_ballFront_r_jnt_Composited: CFrameValue;
		skeleton_c_grp_Original: CFrameValue;
		tail04_c_jnt_Initial: CFrameValue;
		tail04_c_jnt_Composited: CFrameValue;
		tail03_c_jnt_Initial: CFrameValue;
		tail03_c_jnt_Composited: CFrameValue;
		tail02_c_jnt_Initial: CFrameValue;
		driver_shoulder_l_jnt_Initial: CFrameValue;
		driver_tarsal_l_jnt_Original: CFrameValue;
		tail01_c_jnt_Initial: CFrameValue;
		driver_shoulderUp_l_jnt_Composited: CFrameValue;
		pelvis_c_jnt_Original: CFrameValue;
		pelvis_c_jnt_Composited: CFrameValue;
		earMid_l_jnt_Composited: CFrameValue;
		toeBack_l_jnt_Composited: CFrameValue;
		driver_toeFront_r_jnt_Composited: CFrameValue;
		elbow_r_jnt_Composited: CFrameValue;
		driver_carpal_l_jnt_Composited: CFrameValue;
		knee_l_jnt_Composited: CFrameValue;
		driver_carpal_r_jnt_Original: CFrameValue;
		driver_shoulder_r_jnt_Initial: CFrameValue;
		driver_shoulder_l_jnt_Composited: CFrameValue;
		noseEnd_c_jnt_Original: CFrameValue;
		earBase_l_jnt_Original: CFrameValue;
		driver_toeFront_l_jnt_Initial: CFrameValue;
		driver_shoulderUp_l_jnt_Original: CFrameValue;
		toeBack_l_jnt_Initial: CFrameValue;
		driver_elbow_r_jnt_Original: CFrameValue;
		driver_toeFront_l_jnt_Composited: CFrameValue;
		earMid_l_jnt_Original: CFrameValue;
		root_c_jnt_Initial: CFrameValue;
		jawEnd_c_jnt_Composited: CFrameValue;
		driver_knee_l_jnt_Composited: CFrameValue;
		knee_r_jnt_Original: CFrameValue;
		headEnd_c_jnt_Initial: CFrameValue;
		carpal_r_jnt_Composited: CFrameValue;
		driver_shoulderUp_r_jnt_Composited: CFrameValue;
		elbow_l_jnt_Original: CFrameValue;
		earEnd_l_jnt_Initial: CFrameValue;
		toeFront_r_jnt_Original: CFrameValue;
		tarsal_l_jnt_Composited: CFrameValue;
		ballFront_l_jnt_Original: CFrameValue;
		headEnd_c_jnt_Composited: CFrameValue;
		toeFront_r_jnt_Initial: CFrameValue;
		carpal_r_jnt_Initial: CFrameValue;
		toeFront_l_jnt_Original: CFrameValue;
		shoulderUp_r_jnt_Initial: CFrameValue;
		driver_elbow_l_jnt_Original: CFrameValue;
		tail02_c_jnt_Original: CFrameValue;
		shoulderUp_l_jnt_Composited: CFrameValue;
		skeleton_c_grp_Composited: CFrameValue;
		driver_toeBack_l_jnt_Initial: CFrameValue;
		earMid_r_jnt_Original: CFrameValue;
		driver_thigh_l_jnt_Composited: CFrameValue;
		huskyRig_c_grp_Composited: CFrameValue;
		driver_toeFront_l_jnt_Original: CFrameValue;
		driver_elbow_r_jnt_Composited: CFrameValue;
		driver_ballFront_l_jnt_Initial: CFrameValue;
		shoulder_r_jnt_Composited: CFrameValue;
		spine01_c_jnt_Initial: CFrameValue;
		driver_carpal_l_jnt_Initial: CFrameValue;
		geo_c_grp_Original: CFrameValue;
		earBase_l_jnt_Initial: CFrameValue;
		tail01_c_jnt_Composited: CFrameValue;
		earEnd_l_jnt_Composited: CFrameValue;
		shoulder_l_jnt_Composited: CFrameValue;
		spine01_c_jnt_Original: CFrameValue;
		driver_shoulderUp_l_jnt_Initial: CFrameValue;
	};
	AnimationController: AnimationController;
}

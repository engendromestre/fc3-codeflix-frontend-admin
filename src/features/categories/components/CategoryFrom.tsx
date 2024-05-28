import {
    Box,
    Button,
    FormControlLabel,
    FormGroup,
    Grid,
    Switch,
    TextField
} from '@mui/material';

import { Link } from 'react-router-dom';
import { Category } from '../categorySlice';

type Props = {
    category: Category;
    isDisabled?: boolean;
    isLoading?: boolean;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleToogle: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function CategoryFrom({
    category,
    isDisabled = false,
    isLoading = false,
    handleSubmit,
    handleChange,
    handleToogle
}: Props) {
    return (
        <Box p={2}>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            required
                            label="Name"
                            name="name"
                            value={category.name}
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            required
                            label="Description"
                            name="description"
                            value={category.description}
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Switch
                                        name="is_active"
                                        color="secondary"
                                        onChange={handleToogle}
                                        inputProps={{ "aria-label": "controlled" }}
                                    />
                                }
                                label="Active"
                            />
                        </FormGroup>
                    </Grid>

                    <Grid item xs={12}>
                        <Box display="flex" gap={2}>
                            <Button
                                variant="contained"
                                component={Link}
                                to="/categories"
                            >
                                Back
                            </Button>
                            <Button type="submit"
                                variant="contained"
                                color="secondary">
                                Save
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </form>
        </Box>
    )
}
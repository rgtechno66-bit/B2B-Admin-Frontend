import { useCallback, useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import { Iconify } from 'src/components/iconify';
import { usePopover } from 'src/components/custom-popover';

export function StockTableToolbar({ filters, onResetPage, onSearchChange }) {

    const handleFilterName = useCallback(
        (event) => {
            const { value } = event.target;
            onResetPage();
            filters.setState({ searchTerm: value });
            if (onSearchChange) {
                onSearchChange(value);
            }
        },
        [filters, onResetPage, onSearchChange]
    );

    return (
        <Stack
            spacing={2}
            alignItems={{ xs: 'flex-end', md: 'center' }}
            direction={{ xs: 'column', md: 'row' }}
            sx={{ p: 2.5, pr: { xs: 2.5, md: 1 } }}
        >
            <Stack direction="row" alignItems="center" spacing={2} flexGrow={1} sx={{ width: 1 }}>
                <TextField
                    fullWidth
                    value={filters.state.searchTerm}
                    onChange={handleFilterName}
                    placeholder="Search..."
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled' }} />
                            </InputAdornment>
                        ),
                    }}
                />
            </Stack>
        </Stack>
    );
}
